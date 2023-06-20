# GCP Cloud Build Demo
Demo of using Cloud Build to build a Docker image for a NodeJS application

## Example Custom Build Commands
```bash
gcloud builds submit --config cloudbuild/example01a.yaml .
```
```bash
gcloud builds submit --config cloudbuild/example01b.yaml .
```
```bash
gcloud builds submit --config cloudbuild/example01c.yaml .
```
```bash
gcloud builds submit --config cloudbuild/example01d.yaml .
```
```bash
gcloud builds submit --config cloudbuild/example01e.yaml --substitutions=_HELLO="world" .
```
