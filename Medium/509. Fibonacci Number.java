class Solution {

    // using memo array
    Integer[] dp = new Integer[9999];
    public int fib(int n) {
        if(n <= 1) return n;
        if(dp[n] != null) return dp[n];
        dp[n] = fib(n-1) + fib(n-2);
        return dp[n];

    }

    // using memo hashmap
    //  HashMap<Integer, Integer> dp = new HashMap<>();
    // public int fib(int n) {
    //     if(n <= 1) return n;
    //     if(dp.containsKey(n)) return dp.get(n);
    //     int val = fib(n-1) + fib(n-2);
    //     dp.put(n, val);
    //     return val;
    // }

    // fibUsingTabulation bottom-up
     public int fibUsingTabulation(int n) {
        int[] dp = new int[n+1];
        if(n <= 1) return n;
        dp[0] = 0;
        dp[1] = 1;
        for(int i = 2; i<= n; i++){
            dp[i] = dp[i-1] + dp[i-2];
        }
        return dp[n];
    }
}

// import java.util.*;

// public class DijkstraAlgorithm {

//     // Represents an edge in the graph
//     static class Edge {
//         int destination;
//         int weight;

//         public Edge(int destination, int weight) {
//             this.destination = destination;
//             this.weight = weight;
//         }
//     }

//     // Represents a node in the priority queue
//     static class Node implements Comparable<Node> {
//         int vertex;
//         int distance;

//         public Node(int vertex, int distance) {
//             this.vertex = vertex;
//             this.distance = distance;
//         }

//         @Override
//         public int compareTo(Node other) {
//             return Integer.compare(this.distance, other.distance);
//         }
//     }

//     /**
//      * Finds the shortest distances from a source vertex to all other vertices
//      * in a graph using Dijkstra's algorithm.
//      *
//      * @param graph The adjacency list representation of the graph.
//      *              graph[i] contains a list of Edge objects representing edges
//      *              starting from vertex i.
//      * @param numVertices The total number of vertices in the graph.
//      * @param source The starting vertex for finding shortest paths.
//      * @return An array where index i stores the shortest distance from the
//      *         source to vertex i. Returns Integer.MAX_VALUE if a vertex is unreachable.
//      */
//     public static int[] dijkstra(List<List<Edge>> graph, int numVertices, int source) {
//         int[] distances = new int[numVertices];
//         Arrays.fill(distances, Integer.MAX_VALUE); // Initialize distances to infinity

//         PriorityQueue<Node> priorityQueue = new PriorityQueue<>();

//         distances[source] = 0; // Distance to source is 0
//         priorityQueue.add(new Node(source, 0));

//         while (!priorityQueue.isEmpty()) {
//             Node currentNode = priorityQueue.poll();
//             int u = currentNode.vertex;
//             int currentDistance = currentNode.distance;

//             // If we already found a shorter path to 'u', skip processing
//             if (currentDistance > distances[u]) {
//                 continue;
//             }

//             // Explore neighbors of the current node
//             for (Edge edge : graph.get(u)) {
//                 int v = edge.destination;
//                 int weight = edge.weight;

//                 // If a shorter path to 'v' is found through 'u'
//                 if (distances[u] != Integer.MAX_VALUE && distances[u] + weight < distances[v]) {
//                     distances[v] = distances[u] + weight;
//                     priorityQueue.add(new Node(v, distances[v]));
//                 }
//             }
//         }
//         return distances;
//     }

//     public static void main(String[] args) {
//         int numVertices = 5;
//         List<List<Edge>> graph = new ArrayList<>(numVertices);
//         for (int i = 0; i < numVertices; i++) {
//             graph.add(new ArrayList<>());
//         }

//         // Example Graph (similar to a common example)
//         graph.get(0).add(new Edge(1, 2));
//         graph.get(0).add(new Edge(3, 4));
//         graph.get(1).add(new Edge(0, 2));
//         graph.get(1).add(new Edge(2, 5));
//         graph.get(2).add(new Edge(1, 5));
//         graph.get(2).add(new Edge(3, 8));
//         graph.get(3).add(new Edge(0, 4));
//         graph.get(3).add(new Edge(2, 8));
//         graph.get(3).add(new Edge(4, 3));
//         graph.get(4).add(new Edge(3, 3));

//         int sourceVertex = 0;
//         int[] shortestDistances = dijkstra(graph, numVertices, sourceVertex);

//         System.out.println("Shortest distances from source " + sourceVertex + ":");
//         for (int i = 0; i < numVertices; i++) {
//             System.out.println("To vertex " + i + ": " + shortestDistances[i]);
//         }
//     }
// }