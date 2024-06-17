package Vikrant;
import java.util.Scanner;

public class Butterfly {
    public static void main(String[] args) {
        System.out.println("\n----this is a butterfly structure----\n");
        Scanner input = new Scanner(System.in);

        int row;
        do {
            System.out.println("enter the number of rows(odd only):");
             row = input.nextInt();
        }while (row%2 == 0);

        int mid = row/2 + 1;

        for(int i=1; i<=row;i++){
            for(int j=1; j<=row;j++){
                if(i<=mid) {
                    if ( ((i-mid) < (j-mid)) && ((j-mid) < (mid - i)) ){
                        System.out.print("   ");
                    } else {
                        System.out.print(" * ");
                    }
                }
                else {
                    if ( ((i-mid) > (j-mid)) && ((j-mid) > (mid - i)) ){
                        System.out.print("   ");
                    } else {
                        System.out.print(" * ");
                    }
                }
            }
            System.out.println();
        }


    }
}








