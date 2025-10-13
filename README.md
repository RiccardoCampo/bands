# bands

## Dev Setup - Windows
### Backend
1. Install poetry
   1. Install Scoop
   ```commandline
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   iex (new-object net.webclient).downloadstring(‘https://get.scoop.sh‘)
   ```
   2. Install pipx
   ```
   scoop install pipx
   pipx ensurepath
   ```
   5. Install poetry
   ```commandline
    pipx install poetry
   ``` 
2. Configure the venv
   1.
      ```commandline
      poetry config virtualenvs.in-project true
      poetry env use 3.13.1
      poetry install
      ```
   2. at this point you might have trouble installing mysqlclient, the easiest way to solve this is to download a pre-compiled version from here: https://pypi.org/project/mysqlclient/#files

3. Spin up the database
   1. run mysql latest container, name it bands_db
   2. MYSQL_ROOT_PASSWORD=toor
   3. Set ports
   4. log into the db and create the database `bands`
4. Set env
```
cp .env.example to .env
```
5. Run the migrations
```commandline
python .\manage.py migrate
```


### Backend
```commandline
python .\manage.py runserver
```


### Frontend
1. ```npm install```
2. add .env with api base url
```
VUE_APP_BANDS_API_URL=http://localhost:8000/bands
```
3. ```npm run serve```

### DB seeding
```
insert into bands.artist (name, spotify_url, image_url, rating, created_at, updated_at)
values ("test band 1", "", "", 2, "2024-12-28", "2024-12-28")

insert into bands.metric (name, type, category)
values ("rock", 1, 2),
("jazz", 1, 2),
("noisy", 1, 0),
("calm", 1, 0),
("male singer", 0, 0)

select *
from bands.metric

insert into bands.score (artist_id, metric_id, value)
values (1, 1, 3),
(1, 5, 1),
(1, 4, 3)
```


## Pushing Docker images from Windows
1. Replace `CRLF` with `LF` in all the `entrypoint.sh` files, otherwise they won't be recognized.
2. run `deploy.bat`


## Build with Docker

1. Fill in the .env, start from .env.example
2. Run `docker-compose up`
