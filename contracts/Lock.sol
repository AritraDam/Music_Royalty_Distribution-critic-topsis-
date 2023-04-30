// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract Lock {
    address payable Singer =
        payable(0xEeE8Bb97bF563B5916A892a0f6395aA7c931A630);
    address payable Musician =
        payable(0x168ED60D230A27Df562B57D87bF8bE7D6e7B0f0C);
    address payable Composer =
        payable(0x25651e93178614fEB493437a027C2a03b37350Df);
    address payable Lyricist =
        payable(0x2649414dEF59e46980D6bf849D60d4160E8E2ed1);

    function payEth(uint w, uint x, uint y, uint z) public payable {
        Singer.transfer(w);
        Musician.transfer(x);
        Composer.transfer(y);
        Lyricist.transfer(z);
    }
}
