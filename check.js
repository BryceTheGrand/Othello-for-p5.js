function checkCapture(row, col, checkNum) {

  let oppNum = 0;
  let check = 1;

  if (checkNum == 1) oppNum = 2;
  else oppNum = 1;


  //Check left/right

  if (row != 0) {

    check = 1;

    while (true) {

      if (grid[row - check][col] == oppNum) {

        if (row - check > 0)
          check++;
        else {
          check = 1;
          break;
        }


      } else if (grid[row - check][col] == checkNum) {

        while (check >= 1) {

          grid[row - check][col] = checkNum;
          check--;

        }
        break;
      } else if (grid[row - check][col] == 0) {

        check = 1;
        break;

      }

    }

  }

  if (row != 7) {

    check = 1;

    while (true) {

      if (grid[row + check][col] == oppNum) {

        if (check + row < 7)
          check++;
        else {
          check = 1;
          break;
        }


      } else if (grid[row + check][col] == checkNum) {

        while (check >= 1) {

          grid[row + check][col] = checkNum;
          check--;

        }
        break;
      } else if (grid[row + check][col] == 0) {

        check = 1;
        break;

      }

    }

  }


  //Check up/down
  if (col != 0) {

    check = 1;

    while (true) {

      if (grid[row][col - check] == oppNum) {

        if (col - check > 0)
          check++;
        else {
          check = 1;
          break;
        }


      } else if (grid[row][col - check] == checkNum) {

        while (check >= 1) {

          grid[row][col - check] = checkNum;
          check--;

        }
        break;
      } else if (grid[row][col - check] == 0) {

        check = 1;
        break;

      }

    }

  }

  if (col != 7) {

    check = 1;

    while (true) {

      if (grid[row][col + check] == oppNum) {

        if (check + col < 7)
          check++;
        else {
          check = 1;
          break;
        }


      } else if (grid[row][col + check] == checkNum) {

        while (check >= 1) {

          grid[row][col + check] = checkNum;
          check--;

        }
        break;
      } else if (grid[row][col + check] == 0) {

        check = 1;
        break;

      }

    }

  }


  //Check down-right/up-left
  if (col != 0 && row != 0) {

    check = 1;

    while (true) {

      if (grid[row - check][col - check] == oppNum) {

        if (col - check > 0 && row - check > 0)
          check++;
        else {
          check = 1;
          break;
        }


      } else if (grid[row - check][col - check] == checkNum) {

        while (check >= 1) {

          grid[row - check][col - check] = checkNum;
          check--;

        }
        break;
      } else if (grid[row - check][col - check] == 0) {

        check = 1;
        break;

      }

    }

  }

  if (col != 7 && row != 7) {

    check = 1;

    while (true) {

      if (grid[row + check][col + check] == oppNum) {

        if (check + col < 7 && check + row < 7)
          check++;
        else {
          check = 1;
          break;
        }


      } else if (grid[row + check][col + check] == checkNum) {

        while (check >= 1) {

          grid[row + check][col + check] = checkNum;
          check--;

        }
        break;
      } else if (grid[row + check][col + check] == 0) {

        check = 1;
        break;

      }

    }

  }


  //Check up-right/bottom-left
  if (col != 0 && row != 7) {

    check = 1;

    while (true) {

      if (grid[row + check][col - check] == oppNum) {

        if (col - check > 0 && row + check < 7)
          check++;
        else {
          check = 1;
          break;
        }


      } else if (grid[row + check][col - check] == checkNum) {

        while (check >= 1) {

          grid[row + check][col - check] = checkNum;
          check--;

        }
        break;
      } else if (grid[row + check][col - check] == 0) {

        check = 1;
        break;

      }

    }

  }

  if (col != 7 && row != 0) {

    check = 1;

    while (true) {

      if (grid[row - check][col + check] == oppNum) {

        if (check + col < 7 && row - check > 0)
          check++;
        else {
          check = 1;
          break;
        }

      } else if (grid[row - check][col + check] == checkNum) {

        while (check >= 1) {

          grid[row - check][col + check] = checkNum;
          check--;

        }
        break;
      } else if (grid[row - check][col + check] == 0) {

        check = 1;
        break;

      }

    }

  }

}