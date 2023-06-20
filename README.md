# GCP Cloud Build Demo
Demo of using Cloud Build to build a Docker image for a NodeJS application

Resources:
- [Cloud Build (global)](https://console.cloud.google.com/cloud-build/builds;region=global)
- [Cloud Build (region)](https://console.cloud.google.com/cloud-build/builds;region=europe-west4)
- [Artifact Registry](https://console.cloud.google.com/artifacts/docker/simon-karman-cloud-build-demo/europe-west4/gcp-cloud-build-demo)
- [IAM](https://console.cloud.google.com/iam-admin/iam)
- [Secrets Manager](https://console.cloud.google.com/security/secret-manager?referrer=search&project=simon-karman-cloud-build-demo)
- `384372164632@cloudbuild.gserviceaccount.com`

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

## Additional Examples
- [Using Secrets](https://cloud.google.com/build/docs/securing-builds/use-secrets) from [Secrets Manager](https://console.cloud.google.com/security/secret-manager)
    ```bash
    gcloud builds submit --config cloudbuild/example02a.yaml .
    ```
- Using custom [Service Account](https://console.cloud.google.com/iam-admin/serviceaccounts)
    ```bash
    gcloud builds submit --config cloudbuild/example02b.yaml .
    ```
- Self-published image as step
    ```bash
    gcloud builds submit --config cloudbuild/example02c.yaml .
    ```
- Using Volumes
    ```bash
    gcloud builds submit --config cloudbuild/example02d.yaml .
    ```
