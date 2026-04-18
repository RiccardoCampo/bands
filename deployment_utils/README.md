# Deploy backend to Ubuntu Server using docker-compose
## Requirements
* Ubuntu server
* User named `ubuntu`
* Docker

## Steps
1. Create working directory
```commandline
cd /home/ubuntu
mkdir bands && cd bands
```
2. Copy `bands.service`, `docker-compose.yml`, `init_db.sh` to `/home/ubuntu/bands`
3. Create a `.env` file and populate the field in `.env.example`
4. Create self-signed certificates
```commandline
openssl req -newkey rsa:4096  -x509  -sha512  -days 365 -nodes -out certificate.pem -keyout privatekey.pem
chmod 644 privatekey.pem
```
5. Install service
```commandline
sudo cp bands.service /etc/systemd/system/bands.service
```
6. Run service
```commandline
sudo systemcl start bands.service 
```

## CORS
You might need to add hosts or origin regexp to allow CORS on your FE. In that case, populate `DJANGO_CORS_ALLOWED_ORIGINS_REGEX` and/or `DJANGO_ALLOWED_HOSTS` (comma separated)
