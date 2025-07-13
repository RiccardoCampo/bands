docker login

set /p VERSION=Type the version

docker buildx build --platform linux/arm64,linux/amd64 -t riccardocmp/bands-backend:latest --push bands_backend
docker buildx build --platform linux/arm64,linux/amd64 -t riccardocmp/bands-frontend:latest --push bands_frontend

docker tag bands-backend riccardocmp/bands-backend:%VERSION%
docker tag bands-frontend riccardocmp/bands-frontend:%VERSION%

docker push riccardocmp/bands-backend:%VERSION%
docker push riccardocmp/bands-frontend:%VERSION%
