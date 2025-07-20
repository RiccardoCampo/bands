docker login

echo "Do not forget to add .env.production.local with the bands API URL"

set /p VERSION=Type the version

docker buildx build --platform linux/arm64,linux/amd64 -t riccardocmp/bands-backend:latest --push bands_backend
docker buildx build --platform linux/arm64,linux/amd64 -t riccardocmp/bands-frontend:latest --push bands_frontend

docker tag bands-backend riccardocmp/bands-backend:%VERSION%
docker tag bands-frontend riccardocmp/bands-frontend:%VERSION%

docker push riccardocmp/bands-backend:%VERSION%
docker push riccardocmp/bands-frontend:%VERSION%

echo "Run this in the server:"
echo "docker pull riccardocmp/bands-backend:latest && docker pull riccardocmp/bands-frontend:latest && systemctl stop bands.service && systemctl start bands.service"