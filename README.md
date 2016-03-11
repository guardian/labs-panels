Labs Panels
================

This is a working prototype for a new format for Guardian Labs

## Installation

Initial install to get dependencies; `npm install`. Then use `Grunt` to watch for changes.

## Usage

Each panel is a different `li` element inside `<ul class="panels">`. The basic markup of which looks like

```html
<li class="panel">
    <div class="panel__content">
        // The panel's content goes in here
    </div>
    <div class="button">
        <div class="button__label">Label for button</div>
        <div class="button__icon icon"> &#57345;</div>
    </div>
</li>
```

### Placement Modifier Classes

`.panel` can have various modifier classes applied to it depending on where it sits in the flow.

* `.panel--header` should be used for the first panel. This will remove the border and will always be full width, even on desktop.
* `.panel--last` should be used for the last panel. This adds some extra spacing below it.

### Types of Panel

`.panel` can also be modified with different types or styles of panel in mind.

* `.panel--video` used for panels that will have a 1x1 square video in. The markup of which should be

```html
<li class="panel panel--video">
    <div class="panel__content">
        <video class="video" preload="auto" muted>
            <source src="assets/video/nameofvideo.mp4" type="video/mp4">
        </video>
        <img class="video__image" src="assets/images/nameofimage.jpg" />
        <div class="button-sub button-sub--play">
            <div class="button__label">Play</div>
            <div class="button__icon icon">&#57419;</div>
        </div>
        <div class="button-sub button-sub--textless button-sub--sound">
            <div class="button__icon icon">&#57415;</div>
            <div class="button__icon icon icon--muted">&#57414;</div>
        </div>
        <p class="panel__paragraph">
            <span class="panel__paragraph__title">Title</span>
            A paragraph of text goes here
        </p>
    </div>
    <div class="button">
        <div class="button__label">Label for button</div>
        <div class="button__icon icon"> &#57345;</div>
    </div>
</li>
```

* `.panel--sponsor` should be used for panels that link to the sponsor's website. The markup of which should be

```html
<li class="panel panel--sponsor">
    <div class="panel__content">
        <h1 class="headline">
            <span class="headline__lead-in">Lead in</span> Rest of the headline
        </h1>
        <a class="button-sub button-sub--sponsor" href="a.link.to/sponsors/website" target="_blank">
            <div class="button__label">Label for button</div>
            <div class="button__icon icon"> &#57345;</div>
        </a>
    </div>
</li>
```