include .env

install:
	docker-compose	-f	docker-compose.builder.yml	run	--rm	install
dev:
	docker-compose	up
setup:
	docker	volume	create	nodemodules
nodebox:
	docker	run	-v	$(PWD):/src	-w	/src	-u	root	-it	$(NODEVERSION)	/bin/bash
