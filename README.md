<p align="center"><img align="center" src="bands_frontend\public\preview.png"></p>
<p align="center">A web app meant for music lovers which helps you catalogue and sort out your favorite artists.</p>
<p align="center">Try the demo here: <a href="https://bands-music.netlify.app/">bands-music.netlify.app</a>.</p>

# Local setup
1. Download `docker-compose.yml` and `.env.example`
2. Rename `.env.example` to `.env`
3. Run `docker compose up`
4. Browse http://localhost:80

I built images for amd64 and arm32, if they are not working for your machine you need to rebuild them, otherwise ask me to build them for your infrastructure.

# Hosting
If you want to host Bands somewhere (e.g.: on a Raspberry Pi), you can use a similar approach to the local setup, but you need to build the frontend yourself. The reason is that you need to specify the backend url during the build (set `VUE_APP_BANDS_API_URL` in the frontend `.env`).

Other details you need to consider, using docker for the backend:
1. To use SSL
   1. Set `USE_SSL=1` in the `.env` file
   2. Add this to backend volumes to copy local certiticates to the backend container
      ```commandline
        - ./certificate.pem:/app/certificate.pem
        - ./privatekey.pem:/app/privatekey.pem
        ```
2. You might need to set `DJANGO_ALLOWED_HOSTS` and `DJANGO_CORS_ALLOWED_ORIGINS_REGEX`
