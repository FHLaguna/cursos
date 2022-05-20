package br.com.alura.leilao.acceptance.steps;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.junit.Assert;

import br.com.alura.leilao.model.Lance;
import br.com.alura.leilao.model.Leilao;
import br.com.alura.leilao.model.Usuario;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.Before;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;

public class PropondoLanceSteps {

   private Lance lance;
   private Leilao leilao;
   private List<Lance> lances;

   @Before
   public void setup() {
      lances = new ArrayList<>();
      leilao = new Leilao("Tablet XPTO");
   }

   @Dado("um lance valido")
   public void dadoUmLanceValido() {
      Usuario usuario = new Usuario("fulano");
      lance = new Lance(usuario, BigDecimal.TEN);
   }

   @Quando("propoe ao leilao")
   public void quandoPropoeOLance() {
      leilao.propoe(lance);
   }

   @Entao("o lance eh aceito")
   public void entaoOLanceEhAceito() {
      Assert.assertEquals(1, leilao.getLances().size());
      Assert.assertEquals(BigDecimal.TEN, leilao.getLances().get(0).getValor());
   }

   @Dado("um lance de {double} reais do usuario {string}")
   public void um_lance_de_reais_do_usuario_fulano(Double valor, String nomeUsuario) {
      Usuario usuario1 = new Usuario(nomeUsuario);
      Lance lance = new Lance(usuario1, new BigDecimal(valor));
      lances.add(lance);
   }

   @Quando("propoe varios lances ao leilao")
   public void propoe_varios_lances_ao_leilao() {
      lances.forEach(leilao::propoe);
   }

   @Entao("os lances sao aceitos")
   public void os_lances_sao_aceitos() {
      Assert.assertEquals(lances.size(), leilao.getLances().size());
      for (int i = 0; i < lances.size(); i++) {
         Lance expected = lances.get(i);
         Lance actual = leilao.getLances().get(i);
         Assert.assertEquals(expected.getValor(), actual.getValor());
         Assert.assertEquals(expected.getUsuario().getNome(), actual.getUsuario().getNome());
      }
   }

   @Dado("um lance invalido de {double} reais do usuario {string}")
   public void um_lance_invalido_de_reais(Double valor, String nomeUsuario) {
      this.lance = new Lance(new BigDecimal(valor));
   }

   @Entao("o lance nao eh aceito")
   public void o_lance_nao_eh_aceito() {
      Assert.assertFalse(leilao.temLances());
   }

   @Dado("dois lances")
   public void dois_lances(DataTable dataTable) {
      List<Map<String, String>> valueMaps = dataTable.asMaps();

      for (Map<String, String> valueMap : valueMaps) {
         Usuario usuario1 = new Usuario(valueMap.get("nomeUsuario"));
         Lance lance = new Lance(usuario1, new BigDecimal(valueMap.get("valor")));
         lances.add(lance);
      }
   }

   @Entao("o segundo lance nao eh aceito")
   public void o_segundo_lance_nao_eh_aceito() {
      Assert.assertEquals(1, leilao.getLances().size());
      Lance expected = lances.get(0);
      Lance actual = leilao.getLances().get(0);
      Assert.assertEquals(expected.getValor(), actual.getValor());
      Assert.assertEquals(expected.getUsuario().getNome(), actual.getUsuario().getNome());
   }
}
