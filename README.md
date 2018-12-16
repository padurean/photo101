# photo101
Example / boilerplate of a presentation that doesn't need a projector: uses [ably.io](https://ably.io) to synchronise the current slide between presenter and viewers who can just use their mobile phones to attend, by navigating to _<your_presentation_url>_.

## Demo
https://purecore.ro/photo101

## Add your pages
For each page/slide add a html file named **_page-&lt;number&gt;.html_** - e.g. _page-1.html_, _page-2.html_, ... - in the [pages](https://github.com/padurean/photo101/tree/master/pages) folder.

## Enable sync

Set the `myState.ably.enabled` to `true`, your [ably.io](https://ably.io) API key and channel name in both [index.html](https://github.com/padurean/photo101/blob/39505c378c00a95380edaf45438cfcfc2629baae/index.html#L44) and [admin/index.html](https://github.com/padurean/photo101/blob/39505c378c00a95380edaf45438cfcfc2629baae/admin/index.html#L47).
