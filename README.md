# Venture-Stream-task

Key choices made:

1. Append product cards dynamically to a container div via a template, this allows for any number of cards to be shown depending on any number of conditionals, it also allows for any future integration of search functions and / or filtering logic. It would also allow for the cards have data appended to them based on a dataset of products gathered from an external source via a fetch api, for example. This could be a JSON file hosted seperately or from a dataBase, or even just a local object array containing product data. 
2. Ensure the scrolling function handles accidental clicks to make for a more pleasant user experience and to avoid a user clicking on the linked cards when attempting to scrol through them.
