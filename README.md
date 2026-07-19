# AMNEXA Technologies — Django CMS

A professional Django-powered website for AMNEXA Technologies with full CMS capabilities.

## Setup & Run

```bash
cd artifacts/amnexa-django

# Run migrations
python manage.py migrate

# Seed initial data (services + projects)
python manage.py seed_data

# Create admin user
python manage.py createsuperuser

# Run development server
python manage.py runserver 0.0.0.0:$PORT
```

## Admin Panel

Visit `/admin/` to manage:
- **Services** — Add/edit/disable services shown on the site
- **Projects** — Manage portfolio projects with images
- **Blog Posts** — Write and publish blog articles
- **Contact Messages** — View all enquiries from the contact form

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `SECRET_KEY` | dev key | Django secret key |
| `DEBUG` | `True` | Debug mode |
| `PORT` | `8000` | Server port |

## Database Migration to PostgreSQL

Update `DATABASES` in `amnexa/settings.py`:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ.get('DB_NAME'),
        'USER': os.environ.get('DB_USER'),
        'PASSWORD': os.environ.get('DB_PASSWORD'),
        'HOST': os.environ.get('DB_HOST', 'localhost'),
        'PORT': os.environ.get('DB_PORT', '5432'),
    }
}
```

Then install: `pip install psycopg2-binary`

## Pages

| URL | Description |
|---|---|
| `/` | Home page |
| `/about/` | About page |
| `/services/` | All services |
| `/services/<slug>/` | Service detail |
| `/portfolio/` | Portfolio grid |
| `/portfolio/<slug>/` | Project detail |
| `/blog/` | Blog listing |
| `/blog/<slug>/` | Blog article |
| `/contact/` | Contact form |
| `/admin/` | Django admin panel |
| `/sitemap.xml` | SEO sitemap |
| `/robots.txt` | Robots file |
