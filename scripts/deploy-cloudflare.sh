#!/bin/sh
set -eu

PROJECT_NAME="${CLOUDFLARE_PROJECT_NAME:-fazenda-raveneza}"

sh scripts/build-static.sh
npx wrangler pages deploy dist --project-name "$PROJECT_NAME"
