const api = (req, res) => {
  const memePlaceholder = (id, rank, name, imageName) => ({
    id: id,
    name: name,
    picture: `http://localhost:3001/img/${imageName}`,
    rank: rank
  })
  const memeTierlist = [
    memePlaceholder(101, 'b', 'bash', 'bash.png'),
    memePlaceholder(102, 'c', 'c', 'c.png'),
    memePlaceholder(103, 'b', 'c#', 'csharp.png'),
    memePlaceholder(104, 'b', 'c++', 'c++.png'),
    memePlaceholder(105, 's', 'go', 'go.png'),
    memePlaceholder(106, 'f', 'java', 'java.png'),
    memePlaceholder(107, 's', 'js', 'js.png'),
    memePlaceholder(108, 's', 'lisp', 'lisp.png'),
    memePlaceholder(109, 'c', 'lua', 'lua.png'),
    memePlaceholder(110, 'c', 'php', 'php.png'),
    memePlaceholder(111, 'c', 'powershell', 'powershell.png'),
    memePlaceholder(112, 'a', 'python', 'python.png'),
    memePlaceholder(113, 'a', 'ruby', 'ruby.png'),
    memePlaceholder(114, 'b', 'swift', 'swift.png'),
    memePlaceholder(115, 'c', 'vb', 'vb.jpg')
  ]
  res.type('json')
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.json(memeTierlist)
}

export default api
