# Picopark Clone (Name WIP)

A game that is similar to Pico Park, but uses phones as controllers instead.

## Dependencies
- WIP

## Usage
- WIP

## Todo
### Minimum Viable Product
- [x] Set up webpack to route differently for clients and servers
    - [x] `/game` - Actual Phaser game that displays a common screen
    - [x] `/player` - Path for users to connect to and control their characters
- [ ] Set up server/client for listening to user inputs using web sockets
    - Should be done in JS so that it can be hosted together with the game
    - Need to look into how websockets work on JS
    - Need to design webpage properly so that it's easy to use
- [ ] Design actual game
    - Start with a basic platformer with one player controlling a sprite using phone controls

### Further Extensions
- [ ] Implement multiplayer
    - [ ] Support for multiple characters moving at the same time
- [ ] Support multiple game rooms
    - [ ] Create home page to join / create rooms
    - [ ] Generate UUID for each room
- [ ] Implement proper levels
- [ ] Create better looking sprites and levels

### Learning Infrastructure Stuff
- [ ] Host game on AWS
- [ ] Setup Github Actions to autodeploy to AWS / other cloud providers
