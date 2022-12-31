.PHONY: format
format:
	deno fmt

.PHONY: test
test:
	deno fmt --check
	deno lint
	deno test --check=all

.PHONY: publish
publish:
	git tag $(VERSION)
	deno run --allow-read --allow-write --allow-net --allow-run --allow-env build-npm.ts $(VERSION)
	cd npm && npm publish
