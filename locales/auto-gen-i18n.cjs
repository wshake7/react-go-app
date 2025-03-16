// import { glob } from 'glob';
// import fs from 'fs';
// import path from 'path';
const fs = require('node:fs')
const path = require('node:path')
const glob = require('glob')

// 用于存储所有找到的翻译键
const translationKeys = new Set()

// 递归遍历目录并处理文件
function processFiles(directory) {
  const files = glob.sync(`${directory}/**/*.{js,jsx,ts,tsx}`)

  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf-8')
    const regex = /gt\(\s*['"`]([^'"`]+)['"`]\s*\)/g
    let match

    
    while ((match = regex.exec(content)) !== null) {
      translationKeys.add(match[1])
    }
  })
}

// 生成翻译 JSON 文件
function generateTranslationJson(outputPath) {
  const translations = {}
  translationKeys.forEach((key) => {
    translations[key] = key // 使用键作为默认值
  })

  fs.writeFileSync(outputPath, JSON.stringify(translations, null, 2))
  console.log(`翻译文件已生成：${outputPath}`)
}

// 主函数
function main() {
  //zh.json存在则不执行
  if (fs.existsSync(path.resolve(__dirname, '../locales/zh.json'))) {
    return
  }
  const srcDir = path.resolve(__dirname, '../src') // 假设源代码在 src 目录
  const outputPath = path.resolve(__dirname, '../locales/zh.json') // 输出路径

  processFiles(srcDir)
  generateTranslationJson(outputPath)
}

main()
