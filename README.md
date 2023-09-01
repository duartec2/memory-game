# Memory Game
Demo:
https://duartec2.com/memory-game/

Created with [AlpineJS](https://alpinejs.dev/) and [TailwindCSS](https://tailwindcss.com/) in a few lines.

To execute just open the index.html file in your web browser. If you need to modify the CSS,
run `npm run watch` and do the changes in the input.css file. To minify the CSS for production 
run `npm run build`. See TailwindCSS documentation for further information.

## Cards
To adjust the number of cards in the game, change the `PAIRS` constant in app.js file. You can show 
as many card as you want, but remember to verify that you have the images needed for those cards.

Currently, there are 31 different cards available with baseball teams logos and 1 for the reverse 
of the card. So, you can specify up to 31 pairs.

If you want to add more pairs just create a new image with the next consecutive number of image 
and do the required change in `PAIRS` constant in app.js file. If you want to replace the cards,
just copy the images to `assets/cards/` and rename it with consecutive numbers, starting with 0. 

## Notes
* Recommended number of pairs is between 6 and 15, however you can add as many as you want. 
* You can adjust the rows and columns in the `index.html` file modifying the tailwind `grid-cols-*` 
class.




