import React, { useEffect, Component } from 'react'
// Helpers
// Cubic ease-in-out
function ease(k) {
  if ((k *= 2) < 1) return 0.5 * k * k * k * k
  return -0.5 * ((k -= 2) * k * k * k - 2)
}

// to use together, wrap t in easing function
// lerp(min,max, ease(t))
//

function lerp(min, max, t) {
  return min * (1 - t) + max * t
}

function lerpNodes(start, end, t) {
  let nodes = []
  for (let i = 0; i < start.length; i++) {
    nodes.push({
      x: lerp(start[i].x, end[i].x, t),
      y: lerp(start[i].y, end[i].y, t),
      cp1: {
        x: lerp(start[i].cp1.x, end[i].cp1.x, t),
        y: lerp(start[i].cp1.y, end[i].cp1.y, t),
      },
      cp2: {
        x: lerp(start[i].cp2.x, end[i].cp2.x, t),
        y: lerp(start[i].cp2.y, end[i].cp2.y, t),
      },
    })
  }
  return nodes
}

// Blob Creator
// **************************
const createBlob = ({
  center = {},
  points = 4,
  radius,
  nodes = [],
  modifier = 10,
} = {}) => ({
  nodes,
  center,
  radius,
  points,
  step: 360 / points,
  modifier,
  createPoint(angle, radius) {
    let offset = Math.floor(
      (4 / 3) * Math.tan(Math.PI / (2 * this.points)) * this.radius
    )

    let x = this.center.x + Math.cos((-angle * Math.PI) / 180) * this.radius
    let y = this.center.y + Math.sin((-angle * Math.PI) / 180) * this.radius
    let thirdLength = Math.sqrt(this.radius * this.radius + offset * offset)
    let internalAngle = Math.acos(this.radius / thirdLength) * (180 / Math.PI)

    // Prevent control point angles from wrapping around circle
    let ccwAngle =
      internalAngle + angle > 360
        ? internalAngle + angle - 360
        : internalAngle + angle
    let cAngle =
      angle - internalAngle < 0
        ? angle - internalAngle + 360
        : angle - internalAngle

    // cp1 is counter clockwise to the main point, cp2 is clockwise from it
    let cp1 = {
      x: this.center.x + Math.cos((-ccwAngle * Math.PI) / 180) * thirdLength,
      y: this.center.y + Math.sin((-ccwAngle * Math.PI) / 180) * thirdLength,
    }
    let cp2 = {
      x: this.center.x + Math.cos((-cAngle * Math.PI) / 180) * thirdLength,
      y: this.center.y + Math.sin((-cAngle * Math.PI) / 180) * thirdLength,
    }

    return {
      x: x,
      y: y,
      cp1,
      cp2,
    }
  },
  createPointsOnCircle() {
    this.nodes = []
    for (let i = 0; i < 360; i += this.step) {
      let point = this.createPoint(i)
      // let noisyPoint = this.addNoiseToPoint(point);
      this.nodes.push(point)
    }

    return this
  },
  addNoiseToPoint({ point, modifier = this.modifier } = {}) {
    let mx = Math.random() * (modifier - -modifier / 2) + -this.modifier
    let my = Math.random() * (modifier - -modifier / 2) + -this.modifier
    return {
      ...point,
      x: point.x + mx,
      y: point.y + my,
      cp1: {
        x: point.cp1.x + mx,
        y: point.cp1.y + my,
      },
      cp2: {
        x: point.cp2.x + mx,
        y: point.cp2.y + my,
      },
    }
  },
  addNoiseToNodes({ nodes = this.nodes, modifier = this.modifier } = {}) {
    // console.log(nodes)
    this.nodes = nodes.map(node =>
      this.addNoiseToPoint({ point: node, modifier })
    )
    return this
  },
  populate(nodes) {
    this.nodes = nodes
    return this
  },
  render(context) {
    context.beginPath()
    context.moveTo(this.nodes[0].x, this.nodes[0].y)
    for (let j = 1; j < this.nodes.length; j++) {
      let cp1 = this.nodes[j - 1].cp1
      let next = this.nodes[j]
      context.bezierCurveTo(
        cp1.x,
        cp1.y,
        next.cp2.x,
        next.cp2.y,
        next.x,
        next.y
      )
    }
    let last = this.nodes[this.nodes.length - 1]
    let next = this.nodes[0]
    context.bezierCurveTo(
      last.cp1.x,
      last.cp1.y,
      next.cp2.x,
      next.cp2.y,
      next.x,
      next.y
    )

    context.fill()
    return this
  },
})

function setUp(canvas, { modifier = 40, points = 4, blobs = 3, frames = 5 }) {
  // const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext('2d')

  const size = canvas.getBoundingClientRect().width
  const dpr = window.devicePixelRatio
  const radius = size * 0.25

  // let center = size / 2;
  let center = {
    x: size / 2,
    y: size / 2,
  }
  canvas.width = size * dpr
  canvas.height = size * dpr
  ctx.scale(dpr, dpr)

  // 2d array containing sets of animation frames for each blob
  let circles = []
  // store the key frames that we will interpolate between, and eventually push into the circles array
  let keyframes = []
  for (var j = 0; j < blobs; j++) {
    // Create non-randomized starter, to allow a plain "circle" to be the base
    keyframes.push([])
    const c = createBlob({
      center,
      points,
      radius,
      modifier,
    }).createPointsOnCircle()
    keyframes[j].push(c.nodes)

    // loop through the remaining frames, adding noise to each to add variance
    for (var i = 1; i < frames; i++) {
      const c = createBlob({ center, points, radius, modifier })
        .createPointsOnCircle()
        .addNoiseToNodes()
      // const c = new FluidCircle(center, center, 4, size *.25, ctx).init().getNodes();
      keyframes[j].push(c.nodes)
    }
  }

  // iterate through all circle nodes, creating eased linear interpolations between each keyframe
  keyframes.forEach((keyframe, idx) => {
    circles.push([])
    for (var j = 1; j < keyframe.length; j++) {
      for (var i = 0; i <= 100; i++) {
        // create a frame that takes the last blob, the current blob, and a timing function to tween the gap
        let frame = lerpNodes(keyframe[j - 1], keyframe[j], ease(i / 100))
        circles[idx].push(frame)
      }
    }
  })

  // Flip it and reverse it
  // Create a cleaner bounce by adding a reversed array onto the end of the existing one
  let bounced = circles.map(circle => {
    let reversed = [...circle].reverse()

    return [...circle, ...reversed]
  })

  if (window) {
    window.requestAnimationFrame(() => {
      draw(bounced, canvas)
    })
  }
}

function draw(circles, canvas) {
  // const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext('2d')

  // const size = canvas.getBoundingClientRect().width
  // const dpr = window.devicePixelRatio;
  // canvas.width = size * dpr;
  // canvas.height = size * dpr;
  // ctx.scale(dpr, dpr);
  ctx.fillStyle = 'hsla(352,68%,50%, .6)'
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // for each circle, shift the first set of nodes off the array, render it, then push it onto the end
  // this creates a cleaner loop inside the requestAnimationFrame loop.
  circles.forEach(circleFrames => {
    let nodes = circleFrames.shift()

    const circle = createBlob({ nodes }).render(ctx)
    circleFrames.push(nodes)
  })
  if (window) {
    window.requestAnimationFrame(() => {
      draw(circles, canvas)
    })
  }
}

//  setUp();

class BlobViz extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const canvas = this.refs.canvas
    let config = this.props.config || {}
    setUp(canvas, config)
  }

  render() {
    let style = this.props.style
    return (
      <canvas
        ref="canvas"
        style={{
          position: 'absolute',
          right: 0,
          width: '30vw',
          zIndex: '1',
          ...style,
        }}
      ></canvas>
    )
  }
}

export default BlobViz
