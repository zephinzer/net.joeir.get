IMAGE_URL=zephinzer/hiremelah
VERSION=$$(date +'%Y%m%d')

start:
	npm start

build:
	npm run build

test:
	npm run test

deploy:
	npm run deploy

package:
	docker build \
		-t $(IMAGE_URL):latest \
		.

preview: package
	docker run -p 8080:8080 $(IMAGE_URL):latest

publish: package
	docker tag $(IMAGE_URL):latest $(IMAGE_URL):$(VERSION)
	docker push $(IMAGE_URL):latest
	docker push $(IMAGE_URL):$(VERSION)