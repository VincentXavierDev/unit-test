import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      // Options
      exclude: [...configDefaults.exclude, 'e2e/*'], // Những fiel cần loại trừ không cần test
      environment: 'jsdom', // môi trường sẽ sử dụng cho quá trình test. 'jsdom' phù hợp cho 1 web application
      root: fileURLToPath(new URL('./', import.meta.url)), // thư mục dự án
      transformMode: {
        web: [/\.[jt]sx$/] // Đây là thuộc tính để xác định các tệp tin nào sẽ được chuyển đổi (transform) trong quá trình kiểm thử
      }
    }
  })
)
