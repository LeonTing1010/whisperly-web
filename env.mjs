import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    RESEND_API_KEY: z.string(),
    BUY_PRO_RECIPIENT_EMAIL: z.string().email(),
  },
  client: {},
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    BUY_PRO_RECIPIENT_EMAIL: process.env.BUY_PRO_RECIPIENT_EMAIL,
  },
})
