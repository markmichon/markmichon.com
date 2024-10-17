import { createCanvas, registerFont, loadImage } from "canvas"
import fs from "fs"
import path from "path"
import sharp from "sharp"

const splitTitleToLines = (ctx, title, lineLength) => {
  let lines = []
  const words = title.split(" ")
  let currentLine = ""

  for (let word of words) {
    const potentialLine =
      currentLine.length === 0 ? word : `${currentLine} ${word}`

    if (ctx.measureText(potentialLine).width > lineLength) {
      lines.push(currentLine)
      currentLine = word
    } else {
      currentLine = potentialLine
    }
  }
  if (currentLine.length > 0) {
    lines.push(currentLine)
  }
  return lines
}

const draw = (title, filepath) => {
  const dpr = 2
  const padding = 36
  const gap = 16
  const width = 1200
  const height = 627
  const imgPos = {
    w: 366,
    h: 346,
    x: 798,
    y: height / 2 - 346 / 2,
  }
  // maxLineLength = width - imageWidth - gap - padding*2
  const maxLineLength = width - imgPos.w - gap - padding * 2
  registerFont("./src/_11ty/plugins/opengraph-images/SS4.ttf", {
    family: "Source Serif",
    weight: 800,
  })
  registerFont("./src/_11ty/plugins/opengraph-images/SF-Pro.ttf", {
    family: "SF Pro",
    weight: 100,
  })

  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext("2d")
  // ctx.scale(dpr,dpr)
  ctx.quality = "best"
  ctx.font = '800 64px "Source Serif"'
  ctx.fillStyle = "#fff"
  ctx.fillRect(0, 0, width, height)

  const lines = splitTitleToLines(ctx, title, maxLineLength)
  ctx.fillStyle = "#222"
  const lineHeight = ctx.measureText(lines[0]).fontBoundingBoxDescent

  const textYStart = height / 2 - (lines.length * 64) / 2
  lines.forEach((line, i) => {
    let mod = i + 1
    ctx.fillText(line, 36, textYStart + 64 * mod)
  })

  ctx.font = '100 36px "SF Pro'
  ctx.fillText("Mark Michon", 36, textYStart)

  loadImage("./src/_11ty/plugins/opengraph-images/blob.png").then(
    async (img) => {
      const { x, y, w, h } = imgPos
      ctx.drawImage(img, x, y)

      const buffer = canvas.toBuffer("image/png")
      const optimized = await sharp(buffer)
        .png({ quality: 90, compressionLevel: 9 })
        .toBuffer()
      fs.writeFileSync(filepath, optimized)
    },
  )
}

/** @param {import("@11ty/eleventy/src/UserConfig").default} config */
export default async function (config, pluginOptions) {
  config.addFilter("ogImage", async function (title) {
    const out = path.dirname(this.page.outputPath)
    const filename = this.page.fileSlug.trim() || "og"
    const ext = "png"
    const filepath = path.join(out, `${filename}.${ext}`)

    if (fs.existsSync(filepath)) {
      return `${filename}.${ext}`
    }
    await draw(title, filepath)
    return `${filename}.${ext}`
  })
}
