export function formatIban(input: string){
    input = input.replaceAll(" ", "")
    const subs = input.match(/.{1,4}/g);
    return subs?.join(' ').toUpperCase() ?? '';
}