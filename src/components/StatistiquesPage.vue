<template>
  <div class="container-fluid">   
      <!-- ROW 1 -->
      <div class="row">
          <div class="col bg-dark-subtle">
              <h5>Statistiques</h5>
          </div>
      </div>
      
      <div class="row bg-secondary-subtle">
          <div class="col-1 btn-group btn" role="group" aria-label="Button group with nested dropdown">
              <!-- Bouton Refresh -->
              <button type="button" class="btn btn-primary m-1">Rafraîchir</button>
               
        </div>
      </div>
  

      <!-- ROW 2 -->
      <div class="row">
          <div class="col-4">
              <div id="myDiv_histo"></div>
          </div>
          <div class="col-4">
              <div id="myDiv_line"></div>
          </div>
          <div class="col-4 d-flex align-items-center justify-content-center">
              <div id="myDiv_pie"></div>
          </div>
      </div>
          
      <!-- ROW 3 -->
      <div class="row mt-2">
          <div class="col">
              <h4>Tableau numéro 1</h4>
              <div class="table-responsive" style="max-height:200px;">
                  <table class="table table-striped table-hover">
                      <thead>
                          <tr>
                              <th scope="col">#</th>
                              <th scope="col">First</th>
                              <th scope="col">Last</th>
                              <th scope="col">Handle</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                          </tr>
                          <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                          </tr>
                          <tr>
                              <th scope="row">3</th>
                              <td colspan="2">Larry the Bird</td>
                              <td>@twitter</td>
                          </tr>
                          <tr>
                              <th scope="row">3</th>
                              <td colspan="2">Larry the Bird</td>
                              <td>@twitter</td>
                          </tr>
                          <tr>
                              <th scope="row">3</th>
                              <td colspan="2">Larry the Bird</td>
                              <td>@twitter</td>
                          </tr>
                          <tr>
                              <th scope="row">3</th>
                              <td colspan="2">Larry the Bird</td>
                              <td>@twitter</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
          <div class="col">
              <h4>Tableau numéro 2</h4>
              <div class="table-responsive" style="max-height:200px;">
                  <table class="table table-striped table-hover">
                      <thead>
                          <tr>
                              <th scope="col">#</th>
                              <th scope="col">First</th>
                              <th scope="col">Last</th>
                              <th scope="col">Handle</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                          </tr>
                          <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                          </tr>
                          <tr>
                              <th scope="row">3</th>
                              <td colspan="2">Larry the Bird</td>
                              <td>@twitter</td>
                          </tr>
                          <tr>
                              <th scope="row">3</th>
                              <td colspan="2">Larry the Bird</td>
                              <td>@twitter</td>
                          </tr>
                          <tr>
                              <th scope="row">3</th>
                              <td colspan="2">Larry the Bird</td>
                              <td>@twitter</td>
                          </tr>
                          <tr>
                              <th scope="row">3</th>
                              <td colspan="2">Larry the Bird</td>
                              <td>@twitter</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div> 
      </div>
      <!-- ROW 4 -->
      <div class="row mt-2">
          <h4>Tableau numéro 3</h4>
          <div class="table-responsive" style="max-height:200px;">
              <table class="table table-striped table-hover">
                  <thead>
                      <tr>
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                      </tr>
                      <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                      </tr>
                      <tr>
                          <th scope="row">3</th>
                          <td colspan="2">Larry the Bird</td>
                          <td>@twitter</td>
                      </tr>
                      <tr>
                          <th scope="row">3</th>
                          <td colspan="2">Larry the Bird</td>
                          <td>@twitter</td>
                      </tr>
                      <tr>
                          <th scope="row">3</th>
                          <td colspan="2">Larry the Bird</td>
                          <td>@twitter</td>
                      </tr>
                      <tr>
                          <th scope="row">3</th>
                          <td colspan="2">Larry the Bird</td>
                          <td>@twitter</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
</template>

<script>
import $ from 'jquery'; // Import de jQuery
import Plotly from 'plotly.js-dist'; // Import de Plotly

export default {
  name: 'StatistiquesPage'
}
$(document).ready(function(){
          
          if ($('#myDiv_histo').length > 0) {
          // BAR CHART
          var trace1_histo = {
              x: ['giraffes', 'orangutans', 'monkeys'],
              y: [20, 14, 23],
              name: 'SF Zoo',
              type: 'bar'
          };
          var trace2_histo = {
              x: ['giraffes', 'orangutans', 'monkeys'],
              y: [12, 18, 29],
              name: 'LA Zoo',
              type: 'bar'
          };
          var data_histo = [trace1_histo, trace2_histo];
          var layout_histo = {
              barmode: 'group', 
              height: 400,
              width: 500, 
              title: 'TITRE 1'
          };

          Plotly.newPlot('myDiv_histo', data_histo, layout_histo);
        }
        if ($('#myDiv_line').length > 0) {
          // LINE CHART
          var trace1_line = {
              x: [1, 2, 3, 4],
              y: [10, 15, 13, 17],
              type: 'scatter'
          };

          var trace2_line = {
              x: [1, 2, 3, 4],
              y: [16, 5, 11, 9],
              type: 'scatter'
          };
          var data_line = [trace1_line, trace2_line];
          var layout_line = {
              height: 400,
              width: 500,
              title: 'TITRE 2'
          };
          Plotly.newPlot('myDiv_line', data_line, layout_line);
        }
        if ($('#myDiv_pie').length > 0) {
          // PIE CHART
          var data_pie = [{
              values: [19, 26, 55],
              labels: ['Residential', 'Non-Residential', 'Utility'],
              type: 'pie'
          }];

          var layout_pie = {
              height: 400,
              width: 500,
              title: 'TITRE 3'
          };
          Plotly.newPlot('myDiv_pie', data_pie, layout_pie);
        }
      });
  
</script>
