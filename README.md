# 11ty Starter template

## Installation and Local Development

### Installing Bun
Follow this link: [Bun Installation](https://bun.sh/docs/installation)

### Installing dependencies
```bash
bun install
```
### Running local server
```bash
bun run dev
```

## Deploying to cPanel

### Automatic deployment via GitHub Actions

The project is configured for automatic deployment to cPanel hosting when pushing to the `main` branch or when manually triggering the workflow in GitHub.

#### Setting up automatic deployment:

1. **Add secrets to your GitHub repository:**
   - Go to your GitHub repository
   - Open "Settings" → "Secrets and variables" → "Actions"
   - Click "New repository secret"
   - Add the following secrets:
     - `CPANEL_SERVER` - - your FTP server address (usually ftp.yourdomain.com)
     - `CPANEL_USERNAME` - your FTP username
     - `CPANEL_PASSWORD` - your FTP password
     - `CPANEL_PATH` - path to the directory on the server where files should be uploaded (e.g. `/www/`)

2. **Configure permissions for GitHub Actions:**
   - Go to your GitHub repository
   - Open "Settings" → "Actions" → "General"
   - Scroll down to the "Workflow permissions" section
   - Select "Read and write permissions"
   - Click "Save"

#### Manually triggering deployment:

1. Go to your GitHub repository
2. Open the "Actions" tab
3. Select "Deploy to cPanel" in the left panel
4. Click the "Run workflow" button
5. Click the green "Run workflow" button

### Manual deployment to cPanel

1. Build the project locally:
   ```bash
   bun run build
   ```
2. Upload the contents of the dist folder to your hosting via FTP client or cPanel file manager.