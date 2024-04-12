# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

### Accessibility

##### Image Alt Tags

I actually don't think alt text is appropriate in this case. Alt text should provide value to a screen reader, to add context to a handicapped user that they would otherwise not be getting. All the imperative information is already available to the user in the main card content. The image is largely decorative from a screenreader's standpoint. What are the options for an accurate alt-text?

1) `alt'="property"` - this would be the most common solution, but it provides no additional value. Just saying a generic description like "property" is not really doing a whole lot for a user. People who use screen readers actually have them set at an extremely high text-to-speech speed and they lose valuable time scrolling through each card that has to add "property" every time. This is the equivalent of not letting someone scroll a page because they haven't clicked on every card.

2) `alt'="[property address]"` - this is redundant, as the property address is already part of the card and will be read.

3) `alt'="a modern home with a red roof"` - This adds context to the persons's visual features, but is overly complex because you would have to get a unique visual description for every property. There could possibly be something in the the data that could sub for this type of info, but I didn't see anything in the test data that would be suitable.

I think for maximum efficiency of screen reader usage, I think the alt text should be empty.

You can refer to these links to learn more about writing efficient and helpful alt texts:
https://accessibility.huit.harvard.edu/describe-content-images
https://www.a11yproject.com/posts/are-you-making-these-five-mistakes-when-writing-alt-text/

### React Router

##### Header/Nav

Added a Header/Nav that stays on the page and can be updated with more accurate links/titles as more routes are added

##### Routes

A new route can be added for a `details` page when a card is clicked on and redirected to a page with more info on that property

### Tests

### To Do
- create a fallback image for when an image is broken/missing 
- implement Styled Components to cut down on use of `style` attribute everywhere
