# Step 1: Build image and add a descriptive tag
docker build -t mytrgor/ucd_capstone_frontend .

# Step 2: Login to Dockerhub
docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
docker push mytrgor/ucd_capstone_frontend
