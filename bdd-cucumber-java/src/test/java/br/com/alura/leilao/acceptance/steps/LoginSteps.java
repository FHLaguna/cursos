package br.com.alura.leilao.acceptance.steps;

import org.junit.Assert;

import br.com.alura.leilao.e2e.pages.Browser;
import br.com.alura.leilao.e2e.pages.LeiloesPage;
import br.com.alura.leilao.e2e.pages.LoginPage;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;

public class LoginSteps {

   private Browser browser;
   private LoginPage loginPage;
   private LeiloesPage leiloesPage;
   private String username;
   private String password;

   public void setup() {
      browser = new Browser();
      browser.seed();
      loginPage = browser.getLoginPage();
   }

   public void tearDown() {
      browser.clean();
   }

   @Dado("o usuario valido")
   public void o_usuario_valido() {
      setup();
      this.username = "fulano";
      this.password = "pass";
   }

   @Quando("realiza login")
   public void realiza_login() {
      leiloesPage = this.loginPage.realizaLoginComo(username, password);
   }

   @Entao("é redirecionado para a pagina de leiloes")
   public void é_redirecionado_para_a_pagina_de_leiloes() {
      Assert.assertTrue(leiloesPage.estaNaPaginaDeLeiloes());
      tearDown();
   }

   @Dado("o usuario invalido")
   public void o_usuario_invalido() {
      setup();
      this.username = "bla";
      this.password = "ble";
   }

   @Quando("tenta se logar")
   public void tenta_se_logar() {
      this.loginPage.realizaLoginComo(username, password);
   }

   @Entao("continua na página de login")
   public void continua_na_página_de_login() {
      Assert.assertTrue(loginPage.estaNaPaginaDeLoginComErro());
      tearDown();
   }

}
