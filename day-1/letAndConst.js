function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    
    // Print the area of the circle:
    const r=Number(readLine());
    const PI=Math.PI;

    let area=PI * Math.pow(r,2);
    console.log(area);
    // Print the perimeter of the circle:
    let perimeter=2 * PI * r;
    console.log(perimeter);