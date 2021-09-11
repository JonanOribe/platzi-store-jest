import getData from '../../utils/getData';

const reverserString = str =>{
  return new Promise((resolve,reject)=>{
    if(!str){
      reject(Error('Error'))
    }
    resolve(str.split("").reverse().join(""))
  })
}

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar una API y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData('https://google.com')
      .then((response) => {
        expect(response.data).toEqual('12345');
      });
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });

});

  describe('Test promise',()=>{
    test('Comprobar promesa',()=>{
      return reverserString("Hola")
      .then(str=>{
        expect(str).toBe('aloH');
      })
    })

    test("The async-await block code should return a reversed word", async () => {
      const str = await reverserString("adidas");
      expect(str).toBe("sadida");
    });
  })