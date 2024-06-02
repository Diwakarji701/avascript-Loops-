/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFTs you have created
*/

// Array to store all the NFT objects
let nftCollection = [];

// Function to mint a new NFT with given metadata
function mintNFT(name, age, eyeColor, shirtType, accessory) {
    // Create the NFT object with the provided metadata
    const nft = {
        name: name,
        age: age,
        eyeColor: eyeColor,
        shirtType: shirtType,
        accessory: accessory
    };
    // Add the new NFT to the collection
    nftCollection.push(nft);
}

// Function to list all NFTs in the collection
function listNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT #${index + 1}`);
        console.log(`  Name: ${nft.name}`);
        console.log(`  Age: ${nft.age}`);
        console.log(`  Eye Color: ${nft.eyeColor}`);
        console.log(`  Shirt Type: ${nft.shirtType}`);
        console.log(`  Accessory: ${nft.accessory}`);
        console.log('--------------------------');
    });
}

// Function to get the total number of NFTs minted
function getTotalSupply() {
    return nftCollection.length;
}

// Mint a few NFTs with different metadata
mintNFT("Diwakar", 21, "Brown", "T-Shirt", "Necklace");
mintNFT("Anshul", 21, "Black", "Hoodie", "Watch");
mintNFT("Raj", 22, "Brown", "Jacket", "Ring");

// List all the NFTs with their metadata
listNFTs();

// Print the total number of NFTs minted
console.log(`Total Supply: ${getTotalSupply()}`);
