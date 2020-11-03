# kodekit-ui

[Kodekit UI](https://www.joomlatools.com/developer/ui/) is a user interface development kit for web applications. It follows a number of timeless design principles and is build using modern tools and methodologies.

Our goal is to make it easier for developers to create user-centered web applications.

## Installation

```
$ npm install
```

## Development

### Recompiling assets

Run the following command in the repo root:

```
$ /scripts/compile-assets
````

### Adding an icon

* Add the icon as an SVG file to `src/icons/ICONNAME.svg`
* Edit `src/fonts/k-icons-codepoints` and add the following to the end where `62xxx` is the largest number in the file: `"ICONNAME": 62xxx,`
* Convert `62xxx` from base10 to base16
* Edit `src/scss/admin/generated/_k-icons.scss` and add the following to the $icons array: `document-link: "\62XXXINHEX",`
* Run `make font-generator` in repository root
* Go to kodekit, foliokit, and component repositories and run `mason`

### Generating webfonts

Run the following command. This requires [Docker](https://www.docker.com/) on your host. 

```
$ make font-generator
````
