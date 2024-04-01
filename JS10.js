let butterflies = new Set ();
butterflies.add("Monarch Butterfly");
butterflies.add("Morpho");
butterflies.add("Swallowtail butterfly");
butterflies.add("Painted Lady");
butterflies.add("Pieridae");
butterflies.add("Great Purple Emperor");
butterflies.add("Chestnut Tiger");
butterflies.add("Atlas Moth");
butterflies.add("Box Tree Moth");
butterflies.delete("Lymantria Dispar");


console.log(butterflies)

if(butterflies.has("Painted Lady")) {
    console.log("Painted Lady is included in the set")
}

for(const butterfly of butterflies){
    console.log(butterfly)
}

butterflies.clear();
console.log("Set after clear:", butterflies);