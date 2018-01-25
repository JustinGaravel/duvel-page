# Trainspot HTML Integration Test - Duvel Page

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
