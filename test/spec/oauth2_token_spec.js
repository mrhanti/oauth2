describe("OAuth2.Token", function() {
  var OAuth2, Token;

  beforeEach(function() {
    OAuth2 = window.OAuth2;
    Token  = OAuth2.Token;
  });

  it("should be defined", function() {
    expect(Token).not.to.be(null);
    expect(Token).not.to.be(undefined);
  });
});
