var usuarios = [
    {
        nome: 'Diego',
        habilidades: ["Javascript", " Reactjs", " Redux"]
    },
    {
        nome: 'Helena',
        habilidades: ["VueJS", " Ruby on Rails", " Elixir"]
    }
];

for(const usuario of usuarios){
    console.log(usuario.nome + " possui habilidades em: " + usuario.habilidades.join(" / "));
}