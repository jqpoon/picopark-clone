#!/usr/bin/env python
import asyncio
import itertools
import json
import websockets

# Dictionary of ip_addr: player_name
PLAYERS = {}


async def error(websocket, message):
    """
    Send an error message.
    """
    event = {
        "type": "error",
        "message": message,
    }
    await websocket.send(json.dumps(event))


async def join(websocket):
    print("join!")


async def handler(websocket):
    """
    Calls appropriate function when a message is received.
    """
    async for message in websocket:

        # Add player to list of players
        ip_addr = websocket.remote_address[0]
        if ip_addr not in PLAYERS:
            PLAYERS[ip_addr] = str(len(PLAYERS))

        # Parse a message from the UI.
        event = json.loads(message)

        print(event["keypress"] + " pressed by player " + PLAYERS[ip_addr])


async def main():
    async with websockets.serve(handler, "", 8001):
        await asyncio.Future()  # run forever


if __name__ == "__main__":
    asyncio.run(main())
