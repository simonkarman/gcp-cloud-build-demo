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

## Example Running Locally
```bash
npm run dev
```
```bash
npm run lint
```
```bash
npm run test
```
```bash
npm run build
```
```bash
npm run start
```
```bash
# after change to src/index.ts
git commit -m "Updated server response"
git push
```
```bash
# start docker engine
# gcloud auth configure-docker europe-west4-docker.pkg.dev
docker run europe-west4-docker.pkg.dev/simon-karman-cloud-build-demo/gcp-cloud-build-demo/server
```

## Additional Example Custom Build Commands
```bash
gcloud builds submit --config cloudbuild/example02.yaml .
```
