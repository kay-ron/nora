# Nora
> A distributed networking engine (DNE) for decentralized social apps

Nora was created in response to remote-procedure calls (RPCs) and distributed hash tables (DHTs).

In summary, RPCs would issue a call to another computer to which the computer runs the program and issues a response that is sent back to the computer. DHTs are a hash table, in which key-value pairs are stored. The catch is it can be accessed by any computer connected to it (a node).

Because of the steep learning curve and unforgiving complexity of these types of software (as well as multiple types), Nora exists as a solution to this predicament.

## What does Nora do?
Nora is the first software I like to call a "distributed network engine" (DNE). It takes the functionality of a DHT and the idea of an RPC, and mixes them together.

To spare you the talk:
- Provides decentralized, peer-to-peer voice and video chat via WebRTC
- Each node has a local "directory" that stores another node's information
- Prioritizes connections as "first", "second", and "third" priority for P2P connections
- Uses a BitTorrent-like protocol to send and receive files
- Node hopping to conserve bandwidth and ensure best possible connection

Better yet, it is cross-platform thanks to NodeJS and planned interaction with C.

# Ok, show me some examples

If you want to experience it for yourself, then check out **Analogue-1**.

# What license?
This software is released under the MIT License.