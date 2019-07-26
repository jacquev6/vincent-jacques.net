---
title: Don't fork connections pools
published: 2019-07-26
---
So, I was trying to find visual duplicates in a bunch of images stored on Amazon S3.
To speed things up a bit, I used a multiprocessing.Pool to download images and compute perceptual hashes.

A simple version of the code was looking like this:

TODO

It's relatively plain.
Computing the perceptual hashes can be done in parallel in any order, so it's natural to use Pool.imap_unordered.
Then it's just a mater of finding duplicates using a dict.
What could go wrong? Can you spot it? Would you have spotted it without knowing this article's title?

And yet when I ran it I got a bunch of SSL exceptions:

TODO

It was quite weird because random, transient, SSL errors should be rare.
Another set of images to compare was store on Backblaze B2, which has nothing to do with Amazon whatsoever.
And yet, I got SSL errors here as well.

Let's replicate that at a lower level.
At the core of multiprocessing, there is fork.
At the core of boto3, there is socket.

Here is a little server that sends a sequence of growing integers to its clients:

TODO

And here is a client that checks what it receives, implemented using the lower-level primitives:

TODO
