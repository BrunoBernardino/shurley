.PHONY: format
format:
	deno fmt

.PHONY: test
test:
	deno fmt --check
	deno lint
	deno test --check=all
	deno publish --dry-run --allow-dirty

.PHONY: publish
publish:
	deno run --allow-read --allow-write --allow-net --allow-run --allow-env build-npm.ts
	cd npm && npm publish
	deno publish
	git push origin --tags
