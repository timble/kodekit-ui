font-generator:
	@if [ "$(shell docker images -q timble/kodekit-ui-font-generator 2> /dev/null)" == "" ]; then \
		docker build -t timble/kodekit-ui-font-generator -f scripts/font-generator/Dockerfile .;\
	fi
	@docker run -it --volume "$(shell pwd)/dist/fonts:/usr/src/app/dist/fonts" timble/kodekit-ui-font-generator
