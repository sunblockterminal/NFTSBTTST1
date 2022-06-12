// Right click on the script name and hit "Run" to execute
//const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Nftsbttst1Token", function () {
   it("test updating value", async function () {
    const Nftsbttst1Token = await ethers.getContractFactory("Nftsbttst1Token");
    const nftsbttst1Token = await Nftsbttst1Token.deploy();
    await nftsbttst1Token.deployed();
    const nftsbttst1Token2 = await ethers.getContractAt("Nftsbttst1Token", nftsbttst1Token.address);
    const setValue = await nftsbttst1Token2.awardItem("0xC9Bfe0Ccb3DFC2dCE68BdA3a97415E7D8D1570Df","https://sbtgallery.com/CLODY/CL0001.json");
    await setValue.wait();
    console.log('Nftsbttst1Token id:'+ setValue)
  });
});

