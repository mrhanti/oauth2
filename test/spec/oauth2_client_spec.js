describe('OAuth2.Client', function() {

  var OAuth2, Client;

  var secret  = 'c4b45c22da60495b00944c52ada385040b354d7c0bb14cb02bce7c5f25196d09';
  var id      = 'd1b98f1b727937f499724328db028e8938b2770e3a5b125dce1684bef3bfd20d';

  beforeEach(function() {
    OAuth2 = window.OAuth2;
    Client = OAuth2.Client;
  });

  /* Grant Type: Password */

  describe('Client', function() {
    it('throws an error when grant type is "password" and username/password are not defined', function() {
      var params = {
        grant_type: 'password'
      };

      expect(function() {
        new Client(params);
      }).to.throwException(function(e) {
        expect(e).to.be.an(Error);
        expect(e.message).to.contain('username');
        expect(e.message).to.contain('password');
      });
    });

    it('throws an error when grant type is undefined', function() {
      expect(function() {
        new Client({});
      }).to.throwException(function(e) {
        expect(e).to.be.an(Error);
        expect(e.message).to.contain('grant_type');
      });
    });

    it('throws an error when client_id is not defined', function() {
      var params = {
        grant_type: 'password',
        username: 'me@mrhanti.de',
        password: 'secret',
        client_secret: secret
      };

      expect(function() {
        new Client(params);
      }).to.throwException(function(e) {
        expect(e).to.be.an(Error);
        expect(e.message).to.contain('client_id');
      });
    });

    it('throws an error when client_secret is not defined', function() {
      var params = {
        grant_type: 'password',
        username: 'me@mrhanti.de',
        password: 'secret',
        client_id: id
      };

      expect(function() {
        new Client(params);
      }).to.throwException(function(e) {
        expect(e).to.be.an(Error);
        expect(e.message).to.contain('client_secret');
      });
    });

    it('instantiates a new client when all parameters are provided', function() {
      var client, params = {
        grant_type: 'password',
        username: 'me@mrhanti.de',
        password: 'secret',
        client_id: id,
        client_secret: secret
      };

      client = new Client(params);

      expect(client).not.to.be(undefined);
    });
  });

  describe('#getGrantType', function() {

    it('returns adequate grant type', function() {
      var client = new Client({
        grant_type: 'password',
        username: 'me@mrhanti.de',
        password: 'secret',
        client_id: id,
        client_secret: secret
      });

      expect(client.getGrantType()).to.be('password');
    });

  });

  describe('#connect', function() {
    var

    client,

    params = {
      grant_type: 'password',
      username: 'me@mrhanti.de',
      password: 'secret',
      client_id: id,
      client_secret: secret
    };

    beforeEach(function() {
      client = new Client(params);
    });

    it('should be defined', function() {
      expect(client.connect).not.to.be(undefined);
    });

    it('Ajax.post with params', function(done) {
      var ajaxPostSpy = sinon.spy(Ajax, 'post');
      var callbackSpy = sinon.spy(function() {
        done();
      });

      client.connect(callbackSpy);

      expect(ajaxPostSpy.calledOnce).to.be(true);
      return;
      expect(callbackSpy.calledOnce).to.be(true);
    });
  });
});
