# A Weekend Project - Duvel Page

A demo page for a hypothetical new beer. This page was created for a test where I had a weekend to get it done. It can be viewed [here](http://duvelproject-hosting-mobilehub-1893700403.s3-website-ap-northeast-1.amazonaws.com/).

## Usage

For development, run `yarn serve`, which runs multiple development-related tasks, then launches your default browser and listens for changes.

For Production code, run `yarn build` and the code will appear in `/prod` in your project.

## Installation

```zsh
  yarn install
```

## Testing

I have tested this using IE10, 11, Edge, Safari(mobile and desktop), Chrome, and Firefox.

## Known Issues

* Polyfill for smooth scrolling in Safari is likely buggy. While it scrolls the first time, if you click the element again it moves slightly another time.

* Smooth scrolling to the anchors is off by a few increments on all devices.

## Future Improvements

* I'd like to add a hamburger dropdown navigation for all forms of mobile.

* The animations are lacking on desktop so I'd like to improve them.

* Integration of Instagram API.

## License

MIT
