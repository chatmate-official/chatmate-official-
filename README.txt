CHAT MATE WEBSITE (Vite + Tailwind CSS)

Current Setup:
This website now uses Vite for lightning-fast performance and Tailwind CSS for a premium design. 

FILES TO DEPLOY:
To make the GitHub website look exactly like the preview, you must deploy the "dist" folder.

STEPS TO DEPLOY TO GITHUB PAGES:
1. Run the build command in the terminal:
   npm run build
2. This will create a folder named "dist".
3. Upload the CONTENTS of the "dist" folder (not the folder itself) to your GitHub repository.
4. Go to Settings > Pages and select the "main" branch and "/(root)" folder.

Alternatively, for Automatic Deployment:
- Use GitHub Actions for Vite (Recommended).
- Create a file at .github/workflows/deploy.yml with a Vite deployment template.

APK Download:
The "Download" buttons are correctly linked to:
https://huggingface.co/chatmateofficial/chatmateapp/resolve/main/ChatMate.apk

Note: The community numbers and user locations are interactive sample data for presentation purposes.
