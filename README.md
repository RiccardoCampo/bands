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
```commandline
poetry config virtualenvs.in-project true
poetry env use 3.13.1
poetry install
```
3. Spin up the database
   1. run mysql latest container, name it bands_db
   2. MYSQL_ROOT_PASSWORD=toor
   3. Set ports
4. Set env
5. Run the migrations
```commandline
python .\manage.py migrate
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
insert into bands.artist (name, spotify_url, image_url, created_at, updated_at)
values ("test band 1", "", "", "2024-12-28", "2024-12-28")

insert into bands.metric (name, type, category)
values ("score", 1, 1),
("rock", 1, 2),
("jazz", 1, 2),
("noisy", 1, 0),
("calm", 1, 0),
("male singer", 0, 0)

select *
from bands.metric

insert into bands.score (artist_id, metric_id, value)
values (1, 1, 4),
(1, 2, 3),
(1, 6, 1),
(1, 5, 3)
```
