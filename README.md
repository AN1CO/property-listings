# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

## Folder Structure
- `components` folder for sub-components
- `pages` folder for items to display in routes
- `api` folder to put all helper functions related to calling the api
- no `tests` folder (explained in Test section)

## Accessibility

### Image Alt Tags

I actually don't think alt text is appropriate in this case. Alt text should provide value to a screen reader, to add context to a handicapped user that they would otherwise not be getting. All the imperative information is already available to the user in the main card content. The image is largely decorative from a screenreader's standpoint. What are the options for an accurate alt-text?

1) `alt="property"` - this would be the most common solution, but it provides no additional value. Just saying a generic description like "property" is not really doing a whole lot for a user. People who use screen readers actually have them set at an extremely high text-to-speech speed and they lose valuable time scrolling through each card that has to add "property" every time. This is the equivalent of not letting someone scroll a page because they haven't clicked on every card.

2) `alt="[property address]"` - this is redundant, as the property address is already part of the card and will be read.

3) `alt="a modern home with a red roof"` - This adds context to the persons's visual features, but is overly complex because you would have to get a unique visual description for every property. There could possibly be something in the the data that could sub for this type of info, but I didn't see anything in the test data that would be suitable.

I think for maximum efficiency of screen reader usage, I think the alt text should be empty.

You can refer to these links to learn more about writing efficient and helpful alt texts:
- https://accessibility.huit.harvard.edu/describe-content-images
- https://www.a11yproject.com/posts/are-you-making-these-five-mistakes-when-writing-alt-text/

### Lists and Sections for Cards

In order for the grid of cards to be easily accessible by screenreaders, made the following decisions:
- Have the cards organized as an unordered list with `<ul>` and `<li>`s
- each card represented as an `<article>` (with no `title` unless each title can be a unique line of text) because its more specific than `<section>` 
- `<h2>` and `<h3>` to represent the most important information: price and bed/bath/square footage
- I matched the text color for the Listing date, but it does not pass contrast tests. I would bring this up to UI/UX and present a slightly modified version that passes contrast tests.
- Future Addition: Clickable cards. Either an overlay can be used or a specific button/link is used inside the card (preferred)

Refer to these links on making accessible cards:
- https://marketsplash.com/html-section-vs-div/
- https://www.smashingmagazine.com/2022/07/article-section-elements-accessibility/
- https://a11y-style-guide.com/style-guide/section-cards.html
- https://inclusive-components.design/cards/

## React Router

### Header/Nav

Added a Header/Nav that stays on the page and can be updated with more accurate links/titles as more routes are added

### Routes

A new route can be added for a `details` page when a card is clicked on and redirected to a page with more info on that property

## Tests

I chose to organize tests so they are in the same folder as their components/pages/functions it is testing, instead of making a separate `tests` folder. I prefer this style because its easier to find the tests if they need to be updated and its easy to spot if a feature is missing tests.

Testing the following features:

### Listings.test

- it is a list, to maintain accessibility
- That is is receiving the data and displaying the multiple items

### Listing.test

- Accessibility: card is represented as an `article` and includes the text within
- Accessibility: the semantic `heading`, `<img>`, and `<button>` are present and displayed correctly 
- All part of the card is displaying the translated data correctly
- button functionality

### api.test

- api is returning data, but this test could probably be improved or deleted because its just testing mock data

## To Do
- create a fallback image for when an image is broken/missing 
- implement Styled Components to cut down on use of `style` attribute everywhere
- create env file for api keys to simulate proper usage (it is a public api, so not a big deal right now)
- update the contrast on the "Listed" date
- create a `details` route and clickable cards that directs to page with more info on a specific property
